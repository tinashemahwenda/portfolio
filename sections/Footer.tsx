export default function Footer() {
    return (
        <footer className="w-full bg-white py-24 text-center border-t border-gray-100 flex flex-col items-center">
            <div className="font-bold text-4xl mb-6">T.</div>
            <h2 className="text-3xl font-bold mb-8">Lets Work Together</h2>
            <button className="bg-[#1A1A1A] text-white px-8 py-3.5 rounded-full font-medium hover:bg-black transition-colors">
                Talk to Tinotenda
            </button>

            <div className="w-full max-w-6xl mx-auto px-8 flex justify-between items-end mt-32 text-sm text-gray-500">
                <div className="text-left">
                    <p>+263712228741</p>
                    <p>hello@tinotenda.com</p>
                </div>
                <div className="flex gap-4">
                    {/* Social placeholders */}
                    <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                </div>
            </div>
        </footer>
    );
}