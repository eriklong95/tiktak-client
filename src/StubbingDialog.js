export default function StubbingDialog(props) {
    return (
        <dialog open={props.open}>
            <p>Configure stubbing</p>
            <button onClick={() => props.setOpen(false)}>OK</button>
        </dialog>
    )
}