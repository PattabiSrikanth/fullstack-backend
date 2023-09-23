const mongoose = require("mongoose");
const dbConnect = async () => {
  //console.log(process.env);
  try {
    await mongoose.connect(
      "mongodb+srv://srikanthpattabi1234:PS9381ps@cluster0.8froly1.mongodb.net/fullstack-blog?retryWrites=true&w=majority"
    );
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Connected failed", error.message);
  }
};
dbConnect();
//module.export=dbConnect()
