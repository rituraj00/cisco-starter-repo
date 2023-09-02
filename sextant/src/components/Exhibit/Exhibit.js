export default function Exhibit({ data }) {
    return (
        <div className="exhibit-container">
            <h2 className="exhibit-container-heading">Networking Dashboard</h2>

            <div className="data-category">
                {data?.map((category) => {
                    return (
                        <div className="data-category-container">
                            <p className="data-category-heading">{category.title}</p>
                            <div className="data-point-cards">
                                {category.points?.map((point) => {
                                    return (
                                        <div className="data-point-card">
                                            <p className="data-card-heading">{point?.title}</p>
                                            <ul>
                                                {point?.data.map((dataPoint) => {
                                                    return <li>{dataPoint}</li>
                                                })}
                                            </ul>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}