pub mod answers;

fn main() {
    // let res = thousand_separator::thousand_separator(22142000);
    // println!("{}", res);

    // let res = answers::modify_string("s?fs".to_string());
    // println!("{}", res)

    let res = answers::reorder_spaces(" practice   makes   perfect".to_string());
    println!("{}", res)
}
