import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

  export const getAll = async (req, res) => {
    try {
      const { data: users } = await axios.get(`${process.env.API_URL}`);
      if (users.length === 0) {
        res.status(404).json({
          message: "Không có sản phẩm nào",
        });
      }
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  };
  
  export const getone = async (req, res) => {
    try {
      const { data: users } = await axios.get(`${process.env.API_URL}/${req.params.id}`);
      if (users.length === 0) {
        res.status(404).json({
          message: "Không có sản phẩm nào",
        });
      }
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
    // const res = await axios.get("http://localhost:3001/products")
    // const data = await res.data
  };




export const patch = async (req, res) => {
  try {
    const { data: users } = await axios.patch(
      `${process.env.API_URL}/${req.params.id}`,
      req.body
      );
    
    if (users.length === 0) {
      res.status(404).json({
        message: "Không có sản phẩm nào",
      });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const put = async (req, res) => {
  try {
    const { data: users } = await axios.put(
      `${process.env.API_URL}/${req.params.id}`,
      req.body
    );
    //console.log(data);
    if (!users) {
      return res.status(404).json({
        message: "Không tìm thấy user",
      });
    }
    return res.status(202).json({
      message: "cập nhật thành công",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const xoa = async (req, res) => {
  try {
    await axios.delete(`${process.env.API_URL}/${req.params.id}`);
    return res.status(200).json({
      message: "xóa thành công"
    });

  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const create = async (req, res) => {
  try {
    const { data: product } = await axios.post(
      `${process.env.API_URL}`,
      req.body
    );
    if (!product) {
      return res.status(400).json({
        message: "Không thể tạo user",
      });
    }
    return res.status(201).json({
      message: "Them user thanh cong",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};