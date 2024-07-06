function GoToTop() {
    return (
        <div className="position-fixed bottom-0 end-0 p-4 bg-white rounded-pill d-flex justify-content-center align-items-center m-4" style={{ width: '2rem', height: '2rem', boxShadow: '0 0px 3rem rgba(0, 0, 0, 0.4)' }}>
            <img src="expand.svg" alt="Go to top" style={{ rotate: '180deg' }} />
            <a href="#" className="text-muted small" style={{display:'none'}}>Go to top (Ctrl+Home)</a>
        </div>
    )
}

export default GoToTop