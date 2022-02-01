import './1-basic-types';

const numb: number = 5
const color: string = "white"
const list: number[] = [2,2,2]
let cort: [string, number]; cort = ["hello", 5];
enum Colors {Red, Green, Blue} let c: Colors = Colors.Blue

type ST =  (baseString: string, value: number) => string
const setTypes = <ST>function(x:string, y: number): string {
    return ""
}