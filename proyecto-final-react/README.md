# TechStore - E-commerce React

Una aplicación de e-commerce desarrollada con React y Firebase, especializada en productos tecnológicos como laptops, smartphones y tablets.

## 🚀 Características

- **Navegación SPA**: Navegación fluida sin recargas de página usando React Router
- **Catálogo de productos**: Listado dinámico con filtrado por categorías
- **Detalle de productos**: Vista detallada con información completa
- **Carrito de compras**: Gestión del carrito con Context API
- **Checkout**: Proceso completo de finalización de compra
- **Firebase Integration**: Base de datos en tiempo real con Firestore
- **Diseño responsive**: Optimizado para dispositivos móviles y desktop
- **Estado global**: Manejo del estado del carrito con React Context

## 🛠️ Tecnologías utilizadas

- **React 19.2.0**: Framework principal
- **Vite**: Build tool y desarrollo
- **React Router DOM**: Navegación entre páginas
- **Firebase/Firestore**: Base de datos en la nube
- **Lucide React**: Iconos modernos
- **CSS3**: Estilos personalizados con diseño responsive

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── NavBar/
│   │   ├── NavBar.jsx          # Barra de navegación y CartWidget
│   │   └── NavBar.css
│   ├── ItemListContainer/
│   │   ├── ItemListContainer.jsx   # Contenedor de lista de productos
│   │   ├── ItemList.jsx           # Componente de presentación
│   │   ├── Item.jsx               # Tarjeta de producto individual
│   │   └── ItemListContainer.css
│   ├── ItemDetailContainer/
│   │   ├── ItemDetailContainer.jsx # Contenedor de detalle
│   │   ├── ItemDetail.jsx         # Vista detallada del producto
│   │   └── ItemDetail.css
│   ├── ItemCount/
│   │   ├── ItemCount.jsx          # Contador de cantidad
│   │   └── ItemCount.css
│   ├── Cart/
│   │   ├── Cart.jsx               # Vista del carrito
│   │   ├── CartItem.jsx           # Item individual del carrito
│   │   └── Cart.css
│   └── Checkout/
│       ├── CheckoutForm.jsx       # Formulario de checkout
│       └── Checkout.css
├── contexts/
│   └── CartContext.jsx            # Context del carrito de compras
├── services/
│   ├── firebase.js                # Configuración de Firebase
│   └── productService.js          # Servicios de productos
├── data/
│   └── mockData.js               # Datos de ejemplo
├── App.jsx                       # Componente principal
└── App.css                       # Estilos globales
```

## 🔥 Configuración de Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com)
2. Habilita Firestore Database
3. Copia el archivo `.env.example` a `.env.local`
4. Completa las variables de entorno con tus credenciales de Firebase:

```bash
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

## 📦 Instalación y uso

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd proyecto-final-react
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura Firebase (ver sección anterior)

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173`

## 🗄️ Base de datos

### Colección `products`
Cada producto tiene la siguiente estructura:
```javascript
{
  id: "string",
  name: "string",
  category: "laptops" | "smartphones" | "tablets",
  price: number,
  description: "string",
  image: "string (URL)",
  stock: number
}
```

### Colección `orders`
Cada orden tiene la siguiente estructura:
```javascript
{
  buyer: {
    name: "string",
    phone: "string",
    email: "string"
  },
  items: [
    {
      id: "string",
      name: "string",
      price: number,
      quantity: number
    }
  ],
  total: number,
  date: "timestamp",
  status: "pending" | "completed" | "cancelled"
}
```

## 🎯 Funcionalidades principales

### Navegación
- **Inicio**: Vista general de todos los productos
- **Categorías**: Filtrado por laptops, smartphones, tablets
- **Detalle**: Información completa del producto seleccionado
- **Carrito**: Gestión de productos agregados
- **Checkout**: Finalización de la compra

### Carrito de compras
- Agregar productos con cantidad personalizada
- Eliminar productos individuales
- Vaciar carrito completo
- Cálculo automático de totales
- Persistencia durante la navegación

### Experiencia de usuario
- Loaders durante la carga de datos
- Mensajes de estado (carrito vacío, sin stock, etc.)
- Confirmación de acciones importantes
- Diseño responsive para móviles

## 🚀 Deploy

Para deployar la aplicación:

1. Construye el proyecto:
```bash
npm run build
```

2. Sube la carpeta `dist` a tu servicio de hosting preferido (Vercel, Netlify, etc.)

3. Configura las variables de entorno en tu plataforma de hosting

## 🤝 Contribuciones

Este proyecto fue desarrollado como trabajo final del curso de React en Coderhouse.

## 📝 Notas técnicas

- La aplicación incluye fallback a datos mock si Firebase no está configurado
- Implementa patrones de React como hooks, context, y componentes funcionales
- Sigue las mejores prácticas de estructura de carpetas y separación de responsabilidades
- Incluye manejo de errores y estados de carga
- CSS personalizado con enfoque en UX/UI moderno

## 📱 Responsive Design

La aplicación está optimizada para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

---

Desarrollado con ❤️ para Coderhouse
