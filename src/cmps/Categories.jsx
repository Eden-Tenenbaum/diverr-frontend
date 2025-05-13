const fiverrMainCategories = [
    { name: "Graphics & Design", id: "graphics-design" },
    { name: "Programming & Tech", id: "programming-tech" },
    { name: "Digital Marketing", id: "digital-marketing" },
    { name: "Video & Animation", id: "video-animation" },
    { name: "Writing & Translation", id: "writing-translation" },
    { name: "Music & Audio", id: "music-audio" },
    { name: "Business", id: "business" },
    { name: "Finance", id: "finance" },
    { name: "AI Services", id: "ai-services" },
    { name: "Personal Growth", id: "personal-growth" },
    { name: "Consulting", id: "consulting" },
    { name: "Data", id: "data" },
    { name: "Photography", id: "photography" }
  ];

export function Categories() {
    return (
        <section className="categiries-menu-package">
            <ul className="list">
            {fiverrMainCategories.map(category =>
                <li key={category.id}> 
                    <a>{category.name}</a>
                </li>)
            }
        </ul>
        </section >
    )
}
