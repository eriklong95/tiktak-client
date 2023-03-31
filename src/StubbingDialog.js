export default function StubbingDialog(props) {
    return (
        <dialog open={props.open} onClose={() => props.setOpen(false)}>
            <p>Please supply a stub response to the request to.</p>
            <form method="dialog">
                <label htmlFor="url">URL</label>
                <input id="url" type="text"/>
                <label htmlFor="body">Response body</label>
                <textarea id="body"/>
                <button>OK</button>
            </form>
        </dialog>
    )
}