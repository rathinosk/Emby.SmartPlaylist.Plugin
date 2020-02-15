﻿namespace SmartPlaylist.Domain.Values
{
    public class NumberValue : Value
    {
        public static NumberValue Default = new NumberValue(0);

        public NumberValue(int value)
        {
            Value = value;
        }

        public override string Kind => "number";

        public int Value { get; }

        public static NumberValue Create(int value)
        {
            return new NumberValue(value);
        }

        protected bool Equals(NumberValue other)
        {
            return Value == other.Value;
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != GetType()) return false;
            return Equals((NumberValue) obj);
        }

        public override int GetHashCode()
        {
            return Value;
        }

        public static bool operator ==(NumberValue left, NumberValue right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(NumberValue left, NumberValue right)
        {
            return !Equals(left, right);
        }

        public bool IsInRange(NumberRangeValue range)
        {
            return Value >= range.From && Value <= range.To;
        }
    }
}