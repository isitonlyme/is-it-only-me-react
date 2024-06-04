export default function Introduction() {
  return (
    <section className="flex flex-col justify-center items-center w-screen h-screen">
      <h2 className="text-8xl text-[#D0EE1A] font-bold mb-2">Is it only me?</h2>
      <p className="text-[#D0EE1A] text-2xl font-thin">
        This game is mobile only. Scan this QR code and start playing{" "}
      </p>
      <p className="text-[#D0EE1A] text-2xl font-thin">
        If you are an apple user, you can add Is It Only Me? to your homepage by
        following these steps.
      </p>
      <div className="flex">
        <ol className="text-[#D0EE1A] list-decimal mx-auto mt-8 text-2xl">
          <li>
            <p className="font-bold text-2xl">Open Safari</p>
            <p className="font-thin text-xl">
              Launch the Safari web browser on your iPhone.
            </p>
          </li>
          <li>
            <p className="font-bold text-2xl">Navigate to Is It Only Me?</p>
            <p className="font-thin text-xl">
              Type "https://isitonlyme.app/" into the address bar
            </p>
          </li>
          <li>
            <p className="font-bold text-2xl">Access Share Menu</p>
            <p className="font-thin text-xl">
              Once the website loads, tap the "Share" icon at the bottom of the
              screen. It looks like a square with an arrow pointing upwards.
            </p>
          </li>
          <li>
            <p className="font-bold text-2xl">Choose "Add to Home Screen"</p>
            <p className="font-thin text-xl">
              Scroll down in the Share menu until you find the option labeled
              "Add to Home Screen" and tap on it
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
