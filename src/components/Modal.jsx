import { useRef } from "react";

export default function Modal({ setOpen, action = () => {}, children }) {
  const formRef = useRef();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(formRef.current);
          const data = Object.fromEntries(formData);
          action(data);
          setOpen(false)
        }}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        {children}
        <div className="flex gap-x-2 justify-end mt-3">
          <button className="px-4 py-2 bg-green text-white rounded-md ">
            Save
          </button>
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-red text-white rounded-md hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
