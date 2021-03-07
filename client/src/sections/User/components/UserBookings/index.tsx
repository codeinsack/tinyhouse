import { User } from "../../../../lib/graphql/queries/User/__generated__/User";
import { Typography, List } from "antd";
import { ListingCard } from "../../../../lib/components";

interface Props {
  userBookings: User["user"]["bookings"];
  bookingsPage: any;
  limit: number;
  setBookingsPage: (page: number) => void;
}

const { Paragraph, Title, Text } = Typography;

export const UserBookings = ({
  userBookings,
  bookingsPage,
  limit,
  setBookingsPage,
}: Props) => {
  const total = userBookings?.total ?? null;
  const result = userBookings?.result ?? null;

  const userBookingsList = userBookings ? (
    <List
      grid={{
        gutter: 8,
        xs: 1,
        sm: 2,
        lg: 4,
      }}
      dataSource={result ?? undefined}
      locale={{ emptyText: "User haven't made any bookings!" }}
      pagination={{
        position: "top",
        current: bookingsPage,
        total: total ?? undefined,
        defaultPageSize: limit,
        hideOnSinglePage: true,
        showLessItems: true,
        onChange: (page: number) => setBookingsPage(page),
      }}
      renderItem={(userBooking) => {
        const bookingHistory = (
          <div className="user-bookings__booking-history">
            <div>
              Check in: <Text strong>{userBooking.checkIn}</Text>
            </div>
            <div>
              Check out: <Text strong>{userBooking.checkOut}</Text>
            </div>
          </div>
        );

        return (
          <List.Item>
            {bookingHistory}
            <ListingCard listing={userBooking.listing} />
          </List.Item>
        );
      }}
    />
  ) : null;

  return userBookingsList ? (
    <div className="user-bookings">
      <Title level={4} className="user-bookings__title">
        Bookings
      </Title>
      <Paragraph className="user-bookings__description">
        This section highlights the bookings you've made, and the
        check-in/check-out dates associated with said bookings.
      </Paragraph>
      {userBookingsList}
    </div>
  ) : null;
};
