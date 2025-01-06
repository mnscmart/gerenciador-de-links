import { MaterialIcons } from "@expo/vector-icons"


type Category = {
id: string
name: string
icon: keyof typeof MaterialIcons.glyphMap

}

export const categories = [
    {id:"1",name:"Curso",icon:"code"},
    {id:"2",name:"Projeto",icon:"folder"},
    {id:"3",name:"Site",icon:"language"},
    {id:"4",name:"Artigo",icon:"newpaper"},
    {id:"5",name:"Video",icon:"movie"},
    {id:"6",name:"Documentação",icon:"content-paste"},





]