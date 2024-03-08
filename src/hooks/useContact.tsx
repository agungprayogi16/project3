/** @format */

import { useState, useEffect } from "react";

type ContactType = {
  name: string;
  nohp: string;
  email: string;
  message: string;
};

export function useContact() {
  const [contact, setContact] = useState<ContactType>({
    name: "",
    nohp: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
}
