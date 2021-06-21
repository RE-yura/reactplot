import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Props = {
  href: string;
  text: string;
};

const LinkButton: FC<Props> = (props) => {
  return (
    <Link href={props.href}>
      <div className="flex flex-row justify-between items-end w-full mt-10 text-lg cursor-pointer">
        <span>{props.text}</span>
        <div>
          <FontAwesomeIcon className="angle-right" icon={faAngleRight} />
        </div>
      </div>
    </Link>
  );
};

export default LinkButton;
