import { create_deposit_data } from "./deposit.factory"


export interface IMainController {

    deposit_data: () => void
}

export class MainController implements IMainController {

    constructor() {

    }


    deposit_data() {
        create_deposit_data() 
    }
}

