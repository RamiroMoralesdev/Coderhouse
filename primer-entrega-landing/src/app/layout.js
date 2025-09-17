import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

export default function RootLayout({ children }) {
   return (
    <html lang="en">
      <body>
        <Navbar />
        <ItemListContainer mensaje="Productos" />
      </body>
    </html>
  );
}
