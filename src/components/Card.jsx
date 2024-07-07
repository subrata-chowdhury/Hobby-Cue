export function Card({ iconSrc, name, text, btn, btnFunc = () => { } }) {
    return (
        <div className="col">
            <div className="card h-100 border-secondary">
                <div className="card-body p-5 row gy-4 border-secondary">
                    <h4 className="text-dark justify-content-start align-items-center" style={{ display: 'flex', gap: '1rem' }}>
                        {iconSrc ? <img src={iconSrc} width={35} height={35} className='mr-5' /> : '🎨'}
                        {name}
                    </h4>
                    <p className="card-text fs-5 text-secondary">
                        {text}
                    </p>
                    <div>
                        <button className="btn btn-outline-primary rounded" style={{ fontWeight: '600' }} onClick={btnFunc}>{btn}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}