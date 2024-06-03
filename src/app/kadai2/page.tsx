import  React  from  "react";
export  default  async function  Page() {

    const tes = async (formData:FormData) => {
        "use server"
        //server側にログが出ます
    console.log(formData);
    }
    return (
        <div>
            <form action={tes}>
                <input type="text" name="name" placeholder="名前" required/>
                <button type="submit">
                    送信
                </button>
            </form>
        </div>
    );
}