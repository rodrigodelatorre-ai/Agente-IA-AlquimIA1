import { useState, useRef, useEffect } from 'react';\nimport './App.css';\n\n// Definir la estructura de un mensaje\ninterface Message {\n  id: number;\n  text: string;\n  sender: 'user' | 'assistant';\n}\n\n/**\n * Componente principal de la aplicación de chat.\n * Gestiona el estado de los mensajes, la entrada del usuario y la comunicación con el backend.\n */\nfunction App() {\n  // Estado para almacenar la lista de mensajes\n  const [messages, setMessages] = useState<Message[]>([]);\n  // Estado para el valor actual del input\n  const [inputValue, setInputValue] = useState('');\n  // Estado para indicar si se está esperando una respuesta del backend\n  const [isLoading, setIsLoading] = useState(false);\n  // Ref para el área de mensajes para poder hacer scroll hacia abajo\n  const messagesEndRef = useRef<HTMLDivElement>(null);\n\n  /**\n   * Efecto para hacer scroll automático al final del área de mensajes cada vez que se añade uno nuevo.\n   */\n  useEffect(() => {\n    messagesEndRef.current?.scrollIntoView({ behavior: \"smooth\" });\n  }, [messages]);\n\n  /**\n   * Maneja el envío del mensaje del usuario.\n   * Añade el mensaje del usuario a la lista y llama a la función para obtener la respuesta del asistente.\n   * @param {React.FormEvent<HTMLFormElement>} event - Evento del formulario.\n   */\n  const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {\n    event.preventDefault(); // Prevenir recarga de página\n    const trimmedInput = inputValue.trim();\n\n    if (!trimmedInput || isLoading) {\n      return; // No enviar mensajes vacíos o mientras se carga\n    }\n\n    // Crear el nuevo mensaje del usuario\n    const newUserMessage: Message = {\n      id: Date.now(), // Usar timestamp como ID simple\n      text: trimmedInput,\n      sender: 'user',\n    };\n\n    // Añadir mensaje del usuario al estado y limpiar input\n    setMessages((prevMessages) => [...prevMessages, newUserMessage]);\n    setInputValue('');\n    setIsLoading(true); // Activar indicador de carga\n\n    // Obtener la respuesta del asistente\n    await getAssistantResponse(trimmedInput);\n  };\n\n  /**\n   * Obtiene la respuesta del asistente desde el backend.\n   * @param {string} userMessageText - El texto del mensaje del usuario.\n   */\n  const getAssistantResponse = async (userMessageText: string) => {\n    try {\n      // Llamada al endpoint del backend\n      // Asegúrate de que la URL coincida con donde se ejecuta tu backend (por defecto localhost:3001)\n      const response = await fetch('http://localhost:3001/chat', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({ message: userMessageText }),\n      });\n\n      if (!response.ok) {\n        // Si la respuesta no es OK, intentar leer el mensaje de error del backend\n        const errorData = await response.json().catch(() => ({ error: 'Error desconocido del servidor' }));\n        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);\n      }\n\n      const data = await response.json();\n\n      // Crear el mensaje del asistente con la respuesta recibida\n      const assistantMessage: Message = {\n        id: Date.now() + 1, // ID ligeramente diferente\n        text: data.reply, // Asume que la respuesta del backend está en la propiedad 'reply'\n        sender: 'assistant',\n      };\n\n      // Añadir mensaje del asistente al estado\n      setMessages((prevMessages) => [...prevMessages, assistantMessage]);\n\n    } catch (error) {\n      console.error(\"Error al obtener respuesta del asistente:\", error);\n      // Añadir un mensaje de error en la interfaz\n      const errorMessage: Message = {\n        id: Date.now() + 1,\n        text: `Error: ${error instanceof Error ? error.message : 'No se pudo conectar con el agente.'}`,\n        sender: 'assistant',\n      };\n      setMessages((prevMessages) => [...prevMessages, errorMessage]);\n    } finally {\n      setIsLoading(false); // Desactivar indicador de carga\n    }\n  };\n\n  return (\n    <div className=\"chat-container\">\n      <h1>¿Con qué puedo ayudarte?</h1>\n\n      {/* Área donde se muestran los mensajes */}\n      <div className=\"messages-area\">\n        {messages.map((msg) => (\n          <div key={msg.id} className={`message ${msg.sender}`}>\n            {msg.text}\n          </div>\n        ))}\n        {/* Elemento invisible para hacer scroll automático */}\n        <div ref={messagesEndRef} />\n        {/* Indicador de carga (opcional) */}\n        {isLoading && <div className=\"loading-indicator\">Pensando...</div>}\n      </div>\n\n      {/* Formulario de entrada de texto */}\n      <form className=\"input-area\" onSubmit={handleSendMessage}>\n        <input\n          type=\"text\"\n          value={inputValue}\n          onChange={(e) => setInputValue(e.target.value)}\n          placeholder=\"Pregunta lo que quieras\"\n          aria-label=\"Escribe tu mensaje\"\n          disabled={isLoading} // Deshabilitar input mientras carga\n        />\n        <button type=\"submit\" disabled={isLoading || !inputValue.trim()} aria-label=\"Enviar mensaje\">\n          {/* Icono de enviar (puedes usar un SVG o un carácter) */}\n          &#x27A4; {/* Ejemplo: Flecha derecha */}\n        </button>\n      </form>\n    </div>\n  );\n}\n\nexport default App;