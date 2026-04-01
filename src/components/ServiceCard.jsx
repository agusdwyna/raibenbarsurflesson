import React from "react";

const ServiceCard = ({
  title,
  subtitle,
  price,
  unit,
  img,
  label,
  bgColor = "bg-white",
  textColor = "text-on-surface",
  buttonColor = "bg-[#005a8d]",
  borderColor,
  icon,
  layout = "image", // "image" | "list" | "fishing"
}) => {
  // Nomor WA default
  const phoneNumber = "6281338422275";

  // Pesan otomatis sesuai service
  const message = `Halo Raiben Bar Surf Lesson, saya ingin booking "${title}".`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // ----------------- LAYOUT LIST -----------------
  if (layout === "list") {
    return (
      <div id="service" className={`rounded-lg p-4 flex flex-col gap-2 shadow-sm max-w-full`}>
        <div className={`flex justify-between items-center border-l-4 pl-4 ${borderColor}`}>
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            {subtitle && <p className="text-sm text-on-surface-variant">{subtitle}</p>}
          </div>
          <div className="text-right">
            <span className={`font-bold text-xl ${textColor}`}>{price}</span>
            <span className="text-xs text-on-surface-variant">{unit}</span>
          </div>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonColor} w-full py-3 rounded-full font-bold text-white mt-2 text-center`}
        >
          Pesan via WhatsApp
        </a>
        <p className="text-center text-[10px] text-tertiary font-bold uppercase tracking-widest mt-1">
          Fast Response!
        </p>
      </div>
    );
  }

  // ----------------- LAYOUT FISHING -----------------
  if (layout === "fishing") {
    return (
      <div className={`${bgColor} rounded-lg p-6 flex flex-col gap-4 max-w-full`}>
        <div className="flex items-center gap-2 text-lg font-bold text-tertiary mb-2">
          {icon && <span className="flex items-center">{icon}</span>}
          <h3>{title}</h3>
        </div>
        {subtitle && <p className={`text-sm ${textColor}`}>{subtitle}</p>}
        <div className="flex flex-col">
          <span className={`text-3xl font-black ${textColor}`}>{price}</span>
          <span className={`text-sm opacity-70 ${textColor}`}>{unit}</span>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonColor} w-full py-4 rounded-full font-bold text-white mt-2 text-center`}
        >
          Pesan via WhatsApp
        </a>
        <p className="text-center text-[10px] text-tertiary font-bold uppercase tracking-widest mt-1">
          Limited Slots, Fast Response
        </p>
      </div>
    );
  }

  // ----------------- LAYOUT IMAGE DEFAULT -----------------
  return (
    <div className={`${bgColor} rounded-lg overflow-hidden shadow-md flex flex-col max-w-full`}>
      {img && (
        <div className="relative w-full h-48 sm:h-64 md:h-72 overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={img}
            alt={title}
          />
          {label && (
            <div className="absolute top-4 right-4 px-4 py-1 rounded-full bg-[#005a8d] text-white text-xs font-bold">
              {label}
            </div>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="text-right">
            <span className={`block font-bold text-xl ${textColor}`}>{price}</span>
            <span className="text-xs text-on-surface-variant">{unit}</span>
          </div>
        </div>

        {subtitle && <p className="text-on-surface-variant text-sm">{subtitle}</p>}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonColor} w-full py-4 rounded-full font-bold text-white flex items-center justify-center gap-2 mt-auto text-center`}
        >
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;