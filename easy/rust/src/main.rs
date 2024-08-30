pub mod modify_string;
pub mod thousand_separator;

fn main() {
    // let res = thousand_separator::thousand_separator(22142000);
    // println!("{}", res);

    let res = modify_string::modify_string("s?fs".to_string());
    println!("{}", res)
}
