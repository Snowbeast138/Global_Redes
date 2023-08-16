// import React from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import Logo from "../assets/Logo.png";

function NavBar() {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      label: "Introducción a las redes de computo",
      icon: "pi pi-desktop",
      items: [
        {
          label: "1.1 Elementos de comunicacion y comunicacion de mensajes",
        },
        {
          label: "1.2 Componentes de la red",
          items: [
            {
              label: "1.2.1 Dispositivos",
            },
            {
              label: "1.2.2 Medios",
            },
            {
              label: "1.2.3 Servicios",
            },
          ],
        },
        {
          label: "1.3 Topología de redes",
          items: [
            {
              label: "1.3.1 LAN",
            },
            {
              label: "1.3.2 MAN",
            },
            {
              label: "1.3.3 WAN",
            },
          ],
        },
        {
          label: "1.4 Modelo de un sistema de comunicaciones",
        },
        {
          label: "1.5 Direccionamiento de red",
        },
        {
          label: "1.6 Modelos de Referencia",
          items: [
            {
              label: "1.6.1 Modelo TCP/IP",
            },
            {
              label: "1.6.2 Modelo OSI ",
            },
            {
              label: "1.6.3 Comparación entre Modelo TCP/IP y OSI ",
            },
          ],
        },
      ],
    },
    {
      label: "Funcionalidades de las capas del modelo OSI",
      icon: "pi pi-server",
      items: [
        {
          label: "2.1 Capa de aplicación",
          items: [
            {
              label: "2.1.1 Modelo cliente servidor",
            },
            {
              label: "2.1.2 Protocolos y servicios de la capa de aplicación",
            },
          ],
        },
        {
          label: "2.2 Capa de transporte.",
          items: [
            {
              label: "2.2.1 Protocolo TCP",
            },
            {
              label: "2.2.2 Administración de sesiones TCP y protocolo UDP",
            },
          ],
        },
        {
          label: "2.3 Capa de Red",
          items: [
            {
              label: "2.3.1 Enrutamiento estático y dinámico",
            },
            {
              label: "2.3.2 Direccionamiento IPv4",
            },
            {
              label: "2.3.3 Tipos y cálculo de direcciones",
            },
            {
              label: "2.3.4 Direcciones públicas y privadas",
            },
          ],
        },
        {
          label: "2.4 Capa Enlace de datos",
          items: [
            {
              label: "2.4.1 Acceso al medio",
            },
            {
              label: "2.4.2 Técnicas de control de acceso al medio",
            },
          ],
        },
        {
          label: "2.5 Capa física.",
          items: [
            {
              label: "2.5.1 Señales de comunicación",
            },
            {
              label: "2.5.2 Señalización y codificación física",
            },
            {
              label: "2.5.3 Medios físicos",
            },
          ],
        },
      ],
    },
    {
      label: "Medios de Transmisión (Capa física)",
      icon: "pi pi-sitemap",
      items: [
        {
          label: "3.1 Medios de transmisión terrestres o guiados.",
          items: [
            {
              label: "3.1.1 Cable coaxial.",
            },
            {
              label: "3.1.2 Par trenzado",
            },
            {
              label: "3.1.3 Fibra óptica",
            },
          ],
        },
        {
          label: "3.2 Medios de transmisión aéreos o no guiados",
          items: [
            {
              label: "3.2.1 Redes inalámbricas",
            },
            {
              label: "3.2.2 Microondas",
            },
            {
              label: "3.2.3 Enlaces satelitales",
            },
            {
              label: "3.2.4 Rayo láser",
            },
            {
              label: "3.2.5 Infrarrojo",
            },
          ],
        },
        {
          label: "3.3 Estándares de la capa física: RS-232, RS-422, RS-449",
        },
        {
          label: "3.4 Cableado estructurado",
          items: [
            {
              label: "3.4.1 Estándar EIA/TIA 568",
            },
            {
              label: "3.4.2 Estándar EIA/TIA 569",
            },
            {
              label: "3.4.3 Estándar EIA/TIA 598 /A",
            },
            {
              label: "3.4.4 Estándar EIA/TIA 606.",
            },
          ],
        },
        {
          label: "3.5 Dispositivos de interconexión",
          items: [
            {
              label: "3.5.1 Repetidor y Hub",
            },
            {
              label: "3.5.2 Switch y Router",
            },
          ],
        },
        {
          label: "3.6 Conexiones a nivel WAN",
          items: [
            {
              label: "3.6.1 ATM",
            },
            {
              label: "3.6.2 Frame Relay",
            },
          ],
        },
        {
          label: "3.7 Seguridad a nivel de capa física",
          items: [
            {
              label: "3.7.1 Confidencialidad en modo con conexión",
            },
            {
              label: "3.7.2 Confidencialidad del flujo de datos",
            },
          ],
        },
      ],
    },
    {
      label: "Instalación y configuración de Red",
      icon: "pi pi-cog",
      items: [
        {
          label: "4.1 Comunicación a través de la LAN con Ethernet",
        },
        {
          label: "4.2 Control de acceso al medio",
        },
        {
          label: "4.3 Hubs y switches",
        },
        {
          label: "4.4 Protocolo de resolución de direcciones",
        },
        {
          label: "4.5 Realización de una red física",
        },
        {
          label: "4.6 Interconexión entre dispositivos",
          items: [
            {
              label: "4.6.1 Conexión de LAN y WAN",
            },
          ],
        },
        {
          label: "4.7 Esquema de direccionamiento",
        },
      ],
    },
  ];

  const start = (
    <img
      src={Logo}
      alt="Logo"
      className="cursor-pointer w-12"
      onClick={() => {
        navigate("/");
      }}
    />
  );

  return (
    <div>
      <Menubar model={items} start={start} className="mb-4" />
    </div>
  );
}

export default NavBar;
