import Menubar from "./Menubar"
import "../styles/AddNewPage.css"
import { useState } from "react"

function AddNewPage() {
    return (
        <div className="w-100" style={{ backgroundColor: '#F8F9FA', minHeight: '93vh' }}>
            <Menubar />
            <div className="mt-5 pt-3 container-fluid">
                <div className="container-lg card mt-5 p-4 pt-2 border-0 flexible-width">
                    <div className="card-body row gy-4 border-secondary">
                        <h4 className="text-dark justify-content-center align-items-center fst-bold" style={{ display: 'flex', gap: '1rem' }}>
                            <img src={"Add (Landing Page).svg"} width={35} height={35} className='mr-5' />
                            Add Your Listing
                        </h4>
                        <p className="card-text fs-6 text-center text-secondary mt-0 py-3" style={{ fontWeight: 600 }}>
                            Select Page type
                        </p>
                    </div>
                    <div className="container pb-3">
                        <div className="row row-cols-1 row-cols-lg-2 g-4">
                            <Card
                                iconSrc="groups"
                                name="People"
                                text="An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association."
                                borderColor={"violet"}
                            />
                            <Card
                                iconSrc="location"
                                name="Place"
                                text="An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus."
                                borderColor={"green"}
                            />
                            <Card
                                iconSrc="AddCart"
                                name="Product"
                                text="An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit."
                                borderColor="red"
                            />
                            <Card
                                iconSrc="Calander"
                                name="Program"
                                text="An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition."
                                borderColor={"blue"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Card({ name, text, iconSrc, borderColor }) {
    const [iconFill, setIconFill] = useState(false)
    return (
        <div className="col">
            <div className={"card h-100 border border-2 border-" + borderColor} onMouseEnter={() => setIconFill(true)} onMouseLeave={() => setIconFill(false)}>
                <div className="card-body p-4 row gy-3">
                    <h4 className="text-dark justify-content-start align-items-center" style={{ display: 'flex', gap: '1rem' }}>
                        {iconSrc ? <img src={iconSrc + (iconFill ? " - fill" : "") + ".svg"} width={35} height={35} className='mr-5' /> : '🎨'}
                        {name}
                    </h4>
                    <p className="card-text fs-6 text-secondary">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AddNewPage
