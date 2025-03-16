export type SerializedCharacter = {
  id: string;
  fullName: string;
  nickname: string;
  image: string;
  birthday: string;
  actor: string;
  about: string;
}

export class Character {
  private _id: string;
  private _fullName: string;
  private _nickname: string;
  private _image: string;
  private _birthday: string;
  private _actor: string;
  private _about: string;

  public static serialize(character: Character): SerializedCharacter {
    return {
      id: character.id,
      fullName: character.fullName,
      nickname: character.nickname,
      image: character.image,
      birthday: character.birthday,
      actor: character.actor,
      about: character.about,
    };
  }

  static deserialize(serializedCharacter: SerializedCharacter): Character {
    return new Character(
      serializedCharacter.id,
      serializedCharacter.fullName,
      serializedCharacter.nickname,
      serializedCharacter.image,
      serializedCharacter.birthday,
      serializedCharacter.actor,
      serializedCharacter.about,
    );
  }


  constructor(id: string, fullName: string, nickname: string, image: string, birthday: string, actor: string, about: string) {
    this._id = id;
    this._fullName = fullName;
    this._nickname = nickname;
    this._image = image;
    this._birthday = birthday;
    this._actor = actor;
    this._about = about;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get birthday(): string {
    return this._birthday;
  }

  set birthday(value: string) {
    this._birthday = value;
  }

  get actor(): string {
    return this._actor;
  }

  set actor(value: string) {
    this._actor = value;
  }

  get about(): string {
    return this._about;
  }

  set about(value: string) {
    this._about = value;
  }
}