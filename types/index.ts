// ======================== USER PARAMS ========================

// in this 'file' and "app\api\webhooks\clerk\route.ts" we can see that what type
// we are exporting with each segment, is being marked/used to pass to backend in the routes file

// Parameters for creating a new user
export type CreateUserParams = {
  clerkID: string; // Identifier for the clerk creating the user
  firstName: string; // User's first name
  lastName: string; // User's last name
  username: string | null; // User's username
  email: string; // User's email address
  photo: string; // URL of the user's profile photo
};

// Parameters for updating an existing user
export type UpdateUserParams = {
  firstName: string; // Updated first name
  lastName: string; // Updated last name
  username: string; // Updated username
  photo: string; // Updated URL of the profile photo
};

// ======================== EVENT PARAMS ========================

// Parameters for creating a new event
export type CreateEventParams = {
  userId: string; // ID of the user creating the event
  event: {
    title: string; // Title of the event
    description: string; // Description of the event
    location: string; // Location of the event
    imageUrl: string; // URL of the event image
    startDateTime: Date; // Start date and time of the event
    endDateTime: Date; // End date and time of the event
    categoryId: string; // ID of the category to which the event belongs
    price: string; // Price of the event
    isFree: boolean; // Flag indicating if the event is free
    url: string; // URL of the event details
  };
  path: string; // Path of the event
};

// Parameters for updating an existing event
export type UpdateEventParams = {
  userId: string; // ID of the user updating the event
  event: {
    _id: string; // ID of the event being updated
    title: string; // Updated title of the event
    imageUrl: string; // Updated URL of the event image
    description: string; // Updated description of the event
    location: string; // Updated location of the event
    startDateTime: Date; // Updated start date and time of the event
    endDateTime: Date; // Updated end date and time of the event
    categoryId: string; // Updated category ID of the event
    price: string; // Updated price of the event
    isFree: boolean; // Updated flag indicating if the event is free
    url: string; // Updated URL of the event details
  };
  path: string; // Path of the event
};

// Parameters for deleting an event
export type DeleteEventParams = {
  eventId: string; // ID of the event to be deleted
  path: string; // Path of the event
};

// Parameters for retrieving all events
export type GetAllEventsParams = {
  query: string; // Query string for filtering events
  category: string; // Category of events to retrieve
  limit: number; // Maximum number of events to retrieve
  page: number; // Page number of events to retrieve
};

// Parameters for retrieving events by user
export type GetEventsByUserParams = {
  userId: string; // ID of the user whose events are to be retrieved
  limit?: number; // Maximum number of events to retrieve (optional)
  page: number; // Page number of events to retrieve
};

// Parameters for retrieving related events by category
export type GetRelatedEventsByCategoryParams = {
  categoryId: string; // ID of the category
  eventId: string; // ID of the event
  limit?: number; // Maximum number of related events to retrieve (optional)
  page: number | string; // Page number of related events to retrieve
};

// Type representing an event
export type Event = {
  _id: string; // ID of the event
  title: string; // Title of the event
  description: string; // Description of the event
  price: string; // Price of the event
  isFree: boolean; // Flag indicating if the event is free
  imageUrl: string; // URL of the event image
  location: string; // Location of the event
  startDateTime: Date; // Start date and time of the event
  endDateTime: Date; // End date and time of the event
  url: string; // URL of the event details
  organizer: {
    _id: string; // ID of the event organizer
    firstName: string; // First name of the event organizer
    lastName: string; // Last name of the event organizer
  };
  category: {
    _id: string; // ID of the event category
    name: string; // Name of the event category
  };
};

// ======================== CATEGORY PARAMS ========================

// Parameters for creating a new category
export type CreateCategoryParams = {
  categoryName: string; // Name of the category
};

// ======================== ORDER PARAMS ========================

// Parameters for checking out an order
export type CheckoutOrderParams = {
  eventTitle: string; // Title of the event
  eventId: string; // ID of the event
  price: string; // Price of the event
  isFree: boolean; // Flag indicating if the event is free
  buyerId: string; // ID of the buyer
};

// Parameters for creating a new order
export type CreateOrderParams = {
  stripeId: string; // ID generated by Stripe
  eventId: string; // ID of the event
  buyerId: string; // ID of the buyer
  totalAmount: string; // Total amount of the order
  createdAt: Date; // Date and time when the order was created
};

// Parameters for retrieving orders by event
export type GetOrdersByEventParams = {
  eventId: string; // ID of the event
  searchString: string; // Search string for filtering orders
};

// Parameters for retrieving orders by user
export type GetOrdersByUserParams = {
  userId: string | null; // ID of the user (or null for all users)
  limit?: number; // Maximum number of orders to retrieve (optional)
  page: string | number | null; // Page number of orders to retrieve
};

// ======================== URL QUERY PARAMS ========================

// Parameters for handling URL query strings
export type UrlQueryParams = {
  params: string; // Query string parameters
  key: string; // Key of the query parameter
  value: string | null; // Value of the query parameter (or null if not present)
};

// Parameters for removing specific keys from a URL query string
export type RemoveUrlQueryParams = {
  params: string; // Query string parameters
  keysToRemove: string[]; // Keys to remove from the query string
};

// Parameters for searching based on URL query parameters
export type SearchParamProps = {
  params: { id: string }; // Parameters for searching
  searchParams: { [key: string]: string | string[] | undefined }; // URL query parameters
};
