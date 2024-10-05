import tvcontroller from "./controller/canalController.js"

export default function adicionarRota(servidor){
    servidor.use(tvcontroller)
}