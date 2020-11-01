export interface Poll {
    id: String;
    question: String;
    choices: Choice[];

}

export interface Choice {
    value: String;
    votes: Number;
}