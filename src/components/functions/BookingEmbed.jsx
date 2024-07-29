const BookingEmbed = () => {
    return(
    <>
        <iframe
            id="JotFormIFrame-242096678140157"
            title="Book Me for a Show"
            onload="window.parent.scrollTo(0,0)"
            allowtransparency="true"
            allow="geolocation; microphone; camera; fullscreen"
            src="https://form.jotform.com/242096678140157"
            frameborder="0"
            style="min-width:100%;max-width:100%;height:539px;border:none;"
            scrolling="no"
        >
        </iframe>
        <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
        <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-242096678140157']", "https://form.jotform.com/")</script>
    </>
    )
}

export default BookingEmbed;