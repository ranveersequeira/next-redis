export default function CarForm(){
    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = new FormData(event.target)
        const formData = Object.fromEntries(form.entries())

        const res = await fetch('/api/cars',{
            body:JSON.stringify(formData),
            headers:{
                'Content-Type':'application/json',
            },
            method:'POST',
        })

        const result = await res.json()

    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="make" type="text"/>
            <input name="model" type="text"/>
            <input name="image" type="text"/>
            <textarea name="description" type="text"/>

            <button type="submit">Create Car</button>
        </form>
    )
}
