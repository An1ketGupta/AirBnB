import { MapPin, Navigation } from "lucide-react";

export default function Wherebox(){
    const recentSearches = [
        { place: "Ooty", date: "1–5 Oct", guests: "6 guests", icon: "🏡" },
    ];

    const suggestions = [
        { place: "Nearby", desc: "Find what’s around you", icon: <Navigation className="w-5 h-5 text-blue-500" /> },
        { place: "Noida, Uttar Pradesh", desc: "Near you", icon: <MapPin className="w-5 h-5 text-pink-500" /> },
        { place: "Jaipur, Rajasthan", desc: "Great for a weekend getaway", icon: <MapPin className="w-5 h-5 text-indigo-500" /> },
        { place: "Gurgaon District, Haryana", desc: "Popular with travellers near you", icon: <MapPin className="w-5 h-5 text-amber-500" /> },
        { place: "Dehradun, Uttarakhand", desc: "For nature lovers", icon: <MapPin className="w-5 h-5 text-green-500" /> },
        { place: "Nearby", desc: "Find what’s around you", icon: <Navigation className="w-5 h-5 text-blue-500" /> },
        { place: "Noida, Uttar Pradesh", desc: "Near you", icon: <MapPin className="w-5 h-5 text-pink-500" /> },
        { place: "Jaipur, Rajasthan", desc: "Great for a weekend getaway", icon: <MapPin className="w-5 h-5 text-indigo-500" /> },
        { place: "Gurgaon District, Haryana", desc: "Popular with travellers near you", icon: <MapPin className="w-5 h-5 text-amber-500" /> },
        { place: "Dehradun, Uttarakhand", desc: "For nature lovers", icon: <MapPin className="w-5 h-5 text-green-500" /> },
    ];

    return <div className="mt-10 w-[25vw] bg-white h-[500px] shadow-md overflow-auto rounded-4xl no-scrollbar p-6 space-y-4">

            {/* Recent Searches */}
            <div>
                <h2 className="text-sm font-medium text-gray-500 mb-3">Recent searches</h2>
                <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition">
                    <span className="text-2xl">🏡</span>
                    <div>
                        <p className="font-medium">{recentSearches[0].place}</p>
                        <p className="text-sm text-gray-500">
                            {recentSearches[0].date} · {recentSearches[0].guests}
                        </p>
                    </div>
                </div>
            </div>

            {/* Suggested Destinations */}
            <div>
                <h2 className="text-sm font-medium text-gray-500 mb-3">Suggested destinations</h2>
                <div className="space-y-3">
                    {suggestions.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100">
                                {item.icon}
                            </div>
                            <div>
                                <p className="font-medium">{item.place}</p>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
}