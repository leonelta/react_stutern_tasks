export default function validateInfo(data) {
    let errors = {}

    // Name field
    if(!data.name.trim()) {
        errors.name = "Name Required"
    }


}