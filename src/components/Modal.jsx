import React from 'react';

const Modal = () => {
  return (
    <dialog id="modal" className="modal">
      <div className="modal-box w-full max-w-screen-sm">
        <h3 className="font-bold text-lg">Special Consultancy!</h3>
        <p className="py-4">
          Currently any consultant is not available right now.🥹
        </p>
        <div>
          <table className="border w-full">
            <thead>
              <tr>
                <th className="border border-black">Consultancy time</th>
                <th className="border border-black">Off time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-black p-2'>Everyday 10:00am to 8:00pm</td>
                <td className='border border-black p-2'>Everyday 8:01pm to 9:59pm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="modal-action">
          <form method="dialog" className="w-full">
            <button className="btn btn-primary w-full">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;