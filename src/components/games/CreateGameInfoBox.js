function CreateGameInfoBox(props) {
    return (
        <dialog open={props.open}>
            <section>
                {props.message}
            </section>
            <button onClick={() => props.setOpen(false)}>OK</button>
        </dialog>
    );
}

export default CreateGameInfoBox;
