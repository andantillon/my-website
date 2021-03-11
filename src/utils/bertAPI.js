import axios from "axios"

const authToken = import.meta.env.VITE_HUGGING_TOKEN || process.env.VITE_HUGGING_TOKEN

const description = "My name is Andres. I grew up in Costa Rica. I was born in 2002. I'm 19 years old."

export async function getAnswer(question) {
    var response = await axios.post("https://api-inference.huggingface.co/models/deepset/roberta-base-squad2", {
                        "context": description,
                        "question": question
                    }, {
                        headers: {
                            'Authorization': `Bearer ${authToken}`
                        }
                    })
    return response
}