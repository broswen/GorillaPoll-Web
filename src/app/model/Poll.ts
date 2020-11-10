export interface Poll {
    id: string;
    uid: string;
    question: string;
    choices: Choice[];

}

export interface Choice {
    name: string;
    value: number;
}

export interface NewPoll {
  link: string;
}

export interface VoteResponse {
  message: string;
}