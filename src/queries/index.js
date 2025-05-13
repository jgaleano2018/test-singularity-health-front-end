import { gql } from '@apollo/client';

export const GET_USERS = gql`
  {
    getUsers{
        Id,
        Name,
        LastName,
        IsMilitar,
        TimeCreate,
        IsTemporal,
        UserName,
        Password,
        Email:,
        VerificationToken,
        NameTypeDocument,
        Document,
        PlaceExpedition,
        DateExpedition,
        CountryCode,
        CountryName,
        Address,
        City,
        Phone,
        CellPhone,
        EmergencyName,
        EmergencyPhone
    }
  }
`;

export const VIEW_USER = gql`
  query ($userName: String, $password: String){
    getUser(userName: $userName, password: $password) {
        Id,
        Name,
        LastName,
        IsMilitar,
        TimeCreate,
        IsTemporal,
        UserName,
        Password,
        Email:,
        VerificationToken,
        NameTypeDocument,
        Document,
        PlaceExpedition,
        DateExpedition,
        CountryCode,
        CountryName,
        Address,
        City,
        Phone,
        CellPhone,
        EmergencyName,
        EmergencyPhone
    }
  }
`;

export const GET_TYPE_DOCUMENT = gql`
  {
    getTypeDocuments{
        Id,
        NameTypeDocument
    }
  }
`;

export const GET_COUNTRY = gql`
  {
    getCountries{
        Id,
        CountryCode,
        CountryName
    }
  }
`;


export const ADD_USER = gql`
  mutation($name: String, $lastName: String, $isMilitar: Boolean, $timeCreate: Date, $isTemporal: Boolean, $userName: String, $password: String, $email: String, $emailVerified: String, $verificationToken: String,
      $typeDocumentId: Int, $document: String, $placeExpedition: String, $dateExpedition: Date, $countryId: Int, $address: String, $city: String, $phone: String, $cellPhone: String, $emergencyName: String, $emergencyPhone: String ) {
    createAppUser_TB(name: $name, lastName: $lastName, isMilitar: $isMilitar, timeCreate: $timeCreate, isTemporal: $isTemporal, userName: $userName, password: $password, email: $email, emailVerified: $emailVerified, verificationToken: $verificationToken,
      typeDocumentId: $typeDocumentId, document: $document, placeExpedition: $placeExpedition, dateExpedition: $dateExpedition, countryId: $countryId, address: $address, city: $city, phone: $phone, cellPhone: $cellPhone, 
      emergencyName: $emergencyName, emergencyPhone: $emergencyPhone)
  }
`;