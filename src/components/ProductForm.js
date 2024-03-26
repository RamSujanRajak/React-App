import './ProductForm'

export default function ProductForm() {
    return (
            <form>
                <div className='new-product_title'>
                    <label> Title </label>
                    <input type='text'> </input>
                </div>

                <div className='new-product_title'>
                    <label> Date </label>
                    <input type='date' min='2023-01-01' max='2023-12-12'> </input>
                </div>

                <div className='new-product_title'>
                    <button type='submit'> Add Product</button>
                </div>

            </form> 
        );
}