export interface Poll {
    id: String;
    uid: String;
    question: String;
    choices: Choice[];

}

export interface Choice {
    name: String;
    value: Number;
}

export interface NewPoll {
  link: String;
}

export interface VoteResponse {
  message: String;
}