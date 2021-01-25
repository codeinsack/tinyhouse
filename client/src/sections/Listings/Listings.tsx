import React from "react";
import { useQuery, server } from "../../lib/api";
import {
  ListingsData,
  DeleteListingData,
  DeleteListingVariables,
} from "./types";

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      numOfBaths
      rating
    }
  }
`;

const DELETE_LISTING = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
    }
  }
`;

interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const { data, refetch } = useQuery<ListingsData>(LISTINGS);

  const deleteListing = async (id: string) => {
    await server.fetch<DeleteListingData, DeleteListingVariables>({
      query: DELETE_LISTING,
      variables: {
        id,
      },
    });
    refetch();
  };

  const listings = data?.listings;

  const listingsList = (
    <ul>
      {listings?.map((listing) => (
        <li key={listing.id}>
          {listing.title}
          <button onClick={() => deleteListing(listing.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>{title}</h2>
      {listingsList}
    </div>
  );
};
