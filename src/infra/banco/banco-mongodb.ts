import mongoose from "mongoose";
import FilmeRepositorioInterface from "../../aplicacao/filme-repositorio-interface";
require("dotenv").config();
export class BancoMongoDB implements  FilmeRepositorioInterface {
  public filmeModelo: any;
  constructor() {
    try{
      mongoose.connect(process.env.MONGODB_URL || "")
    }catch(error){
      console.log(error)
    }
    this.filmeModelo = mongoose.model("Filme", 
        new mongoose.Schema({
            _id: Number,
            titulo: String,
            descricao: String,
            imagem: String
        })
    )
  }
  async salvar(filme: Filme): Promise<Filme> {
    return new Promise((resolve) => {
      resolve(filme);
    });
  }
  async listar(): Promise<Filme[]> {
    return new Promise((resolve, reject) => {
      reject(new Error("Not implemented yet"));
    })
  }
  async buscarPorId(id:number): Promise<Filme> {
    return new Promise((resolve, reject) => {
      reject(new Error("Not implemented yet"));
    })
  }
}
type Filme = {
  id: number,
  titulo: string,
  descricao: string,
  imagem: string
};