// List all the interface depends on user 

export interface UsersList {
    count: number;
    next: null | string;
    previous: null | string;
    Userss: Users[];
  }
  
  export interface Users {
    id: number;
    username: string;
    full_name: string;
    register_num:string;
    is_active: boolean;
    contact: null | string;
    last_login: null | Date;
  }
  

  export interface UserProfileDetails {
    id: number;
    userdetails: Userdetails;
    usersettings: Usersettings;
    userverifications: null;
    last_login: Date;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_active: boolean;
    date_joined: Date;
    groups: number[];
  }
  
  export interface Userdetails {
    id: number;
    gender_name: string;
    country_name: string;
    register_num: string;
    contact: string;
    dob: Date;
    image: null | string;
    address: string;
    kyc_completed: boolean;
    kyc_completed_date: string | null;
    user: number;
    gender: number;
    country: number;
  }
  
  export interface Usersettings {
    id: number;
    mobile_device_limit: number;
    max_support_user: number;
    user: number;
    current_device_count: number;
    current_user_count: number;
  }

  export interface CustomerBillingDetails {
    id:                 number;
    address:            string;
    state_code:         number;
    state_id:           number;
    district_id:        number;
    gst_number:         null;
    is_igst:            null;
    created_by:         string;
    created_date:       Date;
    last_modified_by:   null;
    last_modified_date: Date;
    name:               string;
    zipcode:            string;
    address_line1:      string;
    address_line2:      string;
    address_line3:      string;
    customer:           number;
    city:               number;
}



  