/** @format */
const WhatsAppIcon = () => {
  const openWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send/?phone=6282363747909&text=Hi%2C+Kak+Agung+Saya+ingin+bertanya+mengenai+AntarJemput+Indonesia%3F&type=phone_number&app_absent=0`,
      "_blank"
    );
  };

  return (
    <div
      className='whatsapp-icon cursor-pointer animate-bounce'
      onClick={openWhatsApp}>
      <img
        className='w-10 h-10 rounded-full'
        src='https://tse1.mm.bing.net/th?id=OIP.X070FVs1DqLDb1dQThVrWwHaHa&pid=Api&P=0&h=180'
        alt='WhatsApp Icon'
      />
    </div>
  );
};

export default WhatsAppIcon;
