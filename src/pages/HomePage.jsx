const fiverrMainCategories = [
    { name: "Programming & Tech", id: "programming-tech" },
    { name: "Graphics & Design", id: "graphics-design" },
    { name: "Digital Marketing", id: "digital-marketing" },
    { name: "Writing & Translation", id: "writing-translation" },
    { name: "Video & Animation", id: "video-animation" },
    { name: "AI Services", id: "ai-services" },
    { name: "Music & Audio", id: "music-audio" },
    { name: "Business", id: "business" },
    { name: "Consulting", id: "consulting" },
    // { name: "Finance", id: "finance" },
    // { name: "Personal Growth", id: "personal-growth" },
    // { name: "Data", id: "data" },
    // { name: "Photography", id: "photography" }
];

export function HomePage() {
    return (
        <section>
            <div className="homepage-categories">
                    {fiverrMainCategories.map(category =>
                        <div className={`${category.id}`}>
                            <a>{category.name}</a>
                        </div>
                    )}
            </div>
            <div className="homepage-popular-services">
                <p>Popular services</p>
            </div>
        </section >
    )
}

