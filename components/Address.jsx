import React, { useState } from 'react';

const Address = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup} className='text-orange-500 hover:text-orange-700 cursor-pointer font-gen tracking-[2px]'>Address & Contact</button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closePopup}
        >
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Address</h2>
              <button onClick={closePopup}>x</button>
            </div>
            <div>
    <h2 className='products-heading1 font-bold text-[30px] text-zinc-500 justify-between'>Address & Contact</h2>
    <p className='mx-auto'>Humahu St,</p>
        <p>GA - 557- 1389,</p>
        <p>Accra - Ghana </p>
        <p>Contact: 0209063000</p>
</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Address;
