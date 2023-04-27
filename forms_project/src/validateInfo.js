export default function validateInfo(data) {
    let errors = {}

    // Name field
    if(!data.name.trim()) {
        errors.name = "Name Required"
    }

    //Email field

    if(!data.email) {
        errors.email = "Email required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
        errors.email = "Email address is invalid"
    }


}