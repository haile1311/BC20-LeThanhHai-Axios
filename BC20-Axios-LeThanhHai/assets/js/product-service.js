function ProductService(){
    this.getListProductApi = function(){
        //Lấy danh sách sản phẩm từ server
    /**
     * axios trả về đối tượng Promise
     *  - pending: chờ
     *  - resolve: thành công
     *  - reject: thất bại
     */
        return axios({
            url: "https://6188d850d0821900178d756d.mockapi.io/products",
            method: "GET",
        });
    };
}

