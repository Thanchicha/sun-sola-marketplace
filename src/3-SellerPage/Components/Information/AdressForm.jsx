import { useEffect, useState } from 'react';

export default function AddressForm() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.src = 'https://api.longdo.com/map/?key=2d0a1c4adc657fbc5951930d60990ebf';
    mapScript.async = true;

    const formScript = document.createElement('script');
    formScript.src = 'https://api.longdo.com/address-form/js/addressform.js';
    formScript.async = true;

    document.body.appendChild(mapScript);
    document.body.appendChild(formScript);

    formScript.onload = () => {
      if (window.longdo && window.longdo.AddressForm) {
        window.myform = new window.longdo.AddressForm('form_div', {
          layout: window.longdo.AddressForm.SIMPLE_SUGGEST,
          showLabels: false,
          required: { poi: true },
          debugDiv: 'debugoutput',
        });
        setLoaded(true);
      } else {
        console.error('Longdo AddressForm not loaded properly.');
      }
    };
  }, []);

  const handleSubmit = () => {
    if (window.myform) window.myform.getFormJSON();
  };

  const handleReset = () => {
    if (window.myform) window.myform.resetForm();
  };

  return (
    <div className="max-w-[700px] mx-auto mt-8">
      <div className="text-lg w-[380px] mx-auto mb-4 inline-block">
        <div id="form_div" className="mb-4">
          {!loaded ? 'Loading form...' : null}
        </div>

        <div className="space-x-2">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>

      <div
        id="debugoutput"
        className="max-w-[18rem] bg-yellow-200 p-2 rounded inline-block align-top"
      >
        ลองกรอกข้อมูลในฟอร์ม
      </div>
    </div>
  );
}
