import { postData } from '../config/postData'
import { BASE_URL } from '../config/indexConfig'

export const sendError = (error) => {
    postData(BASE_URL + "error/save_msg/", {"message": error}).then(
        data => {
            console.log(data)
        }
    ).catch(
        error => {
            console.log('cant do anything')
            console.log(error)
        }
    )
}